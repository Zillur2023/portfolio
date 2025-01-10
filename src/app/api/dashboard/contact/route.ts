import { connect } from "@/dbConfig/dbConfig";
import { Contact } from "@/models/contact";
import { NextRequest, NextResponse } from "next/server";


connect ()

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const userData = await request.json();
        const { name, email, message } = userData

        // Validate the input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields (name, email, message) are required.' },
                { status: 400 }
            );
        }

        // Log the input for debugging

        // Save the message to the database
        const result = await Contact.create({ name, email, message });

        // const buyerEmail = await sendEmail(userData);



        // Return a success response
        return NextResponse.json({ success: true, message: "Contact create successfully", data: result }, { status: 201 });
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

export async function GET(){
    try {
        const result = await Contact.find()
        return NextResponse.json({ success: true, message: "Contact get successfully", data: result }, { status: 201 });
         
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