import { ProjectCardsCarousel } from "./project-list"

// Enable static generation with revalidation every hour
export const revalidate = 3600 // 1 hour in seconds

export default function Page() {
  return (
    <div className="w-full xl:w-[85%] mx-auto">
      <ProjectCardsCarousel />
    </div>
  )
}
