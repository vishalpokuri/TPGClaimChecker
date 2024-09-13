import {Eligible, connectDB} from "../../db/index";  // Adjust the import based on your actual path
import { NextResponse } from 'next/server';

// POST Request
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POST = async (req: any) => {
  try {
    const data = await req.json();
    console.log(data);
    const { name, address } = data;

    // Connect to the database
    await connectDB();

    // Create a new eligible entry
    const newEntry = new Eligible({ name, address });
    await newEntry.save();

    return NextResponse.json({ message: "Entry added", entry: newEntry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error adding entry", error }, { status: 500 });
  }
};