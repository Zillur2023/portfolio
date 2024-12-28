import { connect } from "@/dbConfig/dbConfig";
import { Message } from "@/models/message";
import { NextRequest, NextResponse } from "next/server";


connect ()

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const { name, email, message } = await request.json();

        // Validate the input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields (name, email, message) are required.' },
                { status: 400 }
            );
        }

        // Log the input for debugging
        console.log('Received data:', { name, email, message });

        // Save the message to the database
        const result = await Message.create({ name, email, message });

        // Return a success response
        return NextResponse.json({ success: true, data: result }, { status: 201 });
    } catch (error) {
        // Log the error for debugging
        console.error('Error occurred:', error);

        // Return an error response
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}