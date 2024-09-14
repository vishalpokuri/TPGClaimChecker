import {Eligible, connectDB} from "../../db/index";  // Adjust the import based on your actual path
import { NextRequest, NextResponse } from 'next/server';

// POST Request
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POST = async (req: NextRequest) => {
  try {
    // Connect to the database
    await connectDB();
    
    const resp = await req.json();
    
    const { name, address } = resp;
    if (!name || !address) {
      return NextResponse.json({ message: "Name and address are required" }, { status: 400 });
    }
    // Create a new eligible entry
    const newEntry = new Eligible({ name, address });
    await newEntry.save();

    return NextResponse.json({ message: "Entry added", entry: newEntry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error adding entry", error: String(error) }, { status: 500 });
  }
};