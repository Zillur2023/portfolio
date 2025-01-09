import { connect } from "@/dbConfig/dbConfig";
import { Technology } from "@/models/technology";
import { NextRequest, NextResponse } from "next/server";



connect ()

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const technology = await request.json();

        let result;

        if(technology?._id) {
           result = await Technology.findOneAndUpdate({_id:technology?._id},{...technology}, {new: true})
        } else{

             result = await Technology.create(technology);
        }


    
        return NextResponse.json({ success: true, message: "Technology create successfully", data: result }, { status: 201 });
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
        const result = await Technology.find()
        return NextResponse.json({ success: true, message: "Tecnology get successfully", data: result }, { status: 201 });
         
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