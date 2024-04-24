import Image from 'next/image';

// defining the content of the page
const title = "Hey! It's me, Clodi.";
const small = "Homo Sapiens - Planet Earth - Internet";
const paragraphs = [
    "I am a human being who finds joy in the <b>art of coding</b> at the intersection between <u>humans</u>, <u>nature</u> and <u>technology</u> - where elusive connections can converge into magic.",
    "I craft <b>systems</b> you can use, write <b>notes</b> you can read, everything designed to find out how much is <b>Enough</b>.",
    "That point in time and space where abundance meets us and <u>we have anything we need</u>. I feel it is somewhere within ourselves and a mindful use of technology may guide us there.",
    "If you want to know how I craft such systems in record time and how you can do the same, get my free guide to unlock your programmer superpower."
];
const size = 100;
const FORM = "https://clodi.ck.page/7a1db31a8b";

export default function Home() {
    return (
        <main>
            <div className='flex flex-col gap-4 max-w-sm'>

                {/* image, title and subtitle */}
                <div className='flex justify-center items-center gap-4'>
                    <Image src="/about.jpeg" alt="about" className="rounded-3xl border-2 border-gray-600"
                        width={size} height={size}/>
                    <div className='flex flex-col'>
                        <h1>{title}</h1>
                        <small className='text-gray-500'>{small}</small>
                    </div>
                </div>

                {/* biography paragraphs */}
                {paragraphs.map((text, index) => (
                    <p key={index} className='text-justify' dangerouslySetInnerHTML={{ __html: text }} />
                ))}

                {/* call to action */}
                <a href={FORM} target='_blank' rel='noopener'>
                    <small className='text-white'><b>Here and now.</b></small>
                </a>
            </div>
        </main>
    );
}
