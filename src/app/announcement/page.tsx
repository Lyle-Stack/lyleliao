import AnnouncementContent from "../(components)/AnnouncementContent";
import V2Footer from "../v2/(components)/Footer";
import V2Header from "../v2/(components)/Header";

export default function Announcement() {
  return (
    <main className="min-h-svh py-4 flex flex-col gap-4">
      <div className="fullWidthPadding">
        <V2Header />
      </div>
      <div className="fullWidthPadding">
        <div className="px-4">
          <AnnouncementContent />
        </div>
      </div>
      <V2Footer />
    </main>
  );
}
