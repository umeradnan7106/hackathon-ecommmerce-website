import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

console.log("Sanity Project ID:", projectId); // Debugging output
console.log("Sanity Dataset:", dataset);     // Debugging output

if (!projectId || !dataset) {
  throw new Error('Missing Sanity configuration: Check environment variables');
}

const client = createClient({
  projectId,
  dataset,
  useCdn: true,  // Set to false if fresh data is needed
  apiVersion: '2024-01-01',
});

export {client}