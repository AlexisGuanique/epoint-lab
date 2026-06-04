import { siteConfig } from "@/data/site";
import { BookingIframeEmbed } from "@/components/schedule/BookingIframeEmbed";
import { CalendlyEmbed } from "@/components/schedule/CalendlyEmbed";

export function ScheduleBookingWidget() {
  const { calendlyUrl, bookingWidgetUrl } = siteConfig;

  return (
    <div className="schedule-calendly">
      {calendlyUrl ? (
        <CalendlyEmbed url={calendlyUrl} />
      ) : (
        <BookingIframeEmbed src={bookingWidgetUrl} />
      )}
    </div>
  );
}
