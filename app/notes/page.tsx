import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { sql } from "@vercel/postgres";

// defining the content of the page
const title = "Curated notes to define Enough.";
const description =
  "Dive into the ideas, questions and pioneers that inspired a system. These notes are the foundation for meaningful human-machine interactions on our journey towards Enough.";
const cta = "Pick one and read it. Here and now.";

export default async function Page() {
  // fetching the notes from the database
  const { rows: notes } = await sql`SELECT * from NOTES`;

  return (
    <main>
      {/* headers of the notes page */}
      <div className="max-w-sm flex flex-col gap-2 text-center">
        <h2>{title}</h2>
        <p>{description}</p>
        <small className="text-gray-500">{cta}</small>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-sm">
        {/* notes cards */}
        {notes.map((note, index) => (
          <Fragment key={index}>
            <div className="divider"></div>
            <Link
              href={`/notes/${note.slug}`}
              className="px-3 py-1 rounded-lg hover:bg-gray-800 transition-colors duration-500 flex justify-between"
            >
              {/* title and date */}
              <div>
                <h3>{note.title}</h3>
                <small className="text-gray-500">{note.date}</small>
              </div>

              {/* views counter */}
              <div className="flex justify-center items-center gap-1">
                <small className="text-gray-500">{note.views}</small>
                <Image src="/views.svg" alt="views" width={15} height={15} />
              </div>
            </Link>
          </Fragment>
        ))}
      </div>
    </main>
  );
}
