// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Airtable, { Records, Record } from 'airtable'

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID)

const table = base.table(process.env.AIRTABLE_TABLE_NAME)

const minifyItems = (records: Records<any>) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record: Record<any>) => {
  if (!record.fields.brought) {
    record.fields.brought = false;
  }
  return {
    id: record.id,
    ...record.fields,
  };
};

export const getArtists = async () => {
  try {
    const records = await table.select({}).all()
    return minifyItems(records)
  } catch (error) {
    console.error(error)
    return []
  }
}