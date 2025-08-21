import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { appendToSheet } from "./sheets-service";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store in local storage
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Also save to Google Sheets
      try {
        await appendToSheet({
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message
        });
        console.log('Contact message saved to Google Sheets');
      } catch (sheetsError) {
        console.error('Failed to save to Google Sheets:', sheetsError);
        // Continue with success response even if Sheets fails
      }
      
      console.log('New contact message received:', contactMessage);
      
      res.json({ 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.',
        id: contactMessage.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid form data', 
          errors: error.errors 
        });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ 
          success: false, 
          message: 'An error occurred while sending your message. Please try again.' 
        });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get('/api/contact-messages', async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error('Error fetching contact messages:', error);
      res.status(500).json({ 
        success: false, 
        message: 'An error occurred while fetching messages.' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
