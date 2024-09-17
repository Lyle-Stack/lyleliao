export default function Resume() {
  return (
    <div className="fullWidthPadding">
      <div className="px-4">
        <h1 className="text-2xl md:text-5xl">Resumé.</h1>
        <p className="text-sm py-2 md:py-4 md:text-base footerLinks">
          <a
            href={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_LINK}/view?usp=sharing`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Resume Page"
          >
            Download
          </a>{" "}
          the resume.
        </p>
        <div className="aspect-a4">
          <iframe
            src={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_LINK}/preview`}
            width="100%"
            height="100%"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
