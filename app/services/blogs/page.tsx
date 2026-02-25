import GenericServicePage from "../template"

export default function blogsPage() {
    return (
        <GenericServicePage 
            title="Blogs"
            description="Dynamic blogging solutions to keep your website fresh and engaging."
            highlights={[
                "Tailored solutions for your business",
                "Expert team of professionals",
                "Focus on ROI and performance",
                "Continuous support and optimization",
                "Modern technology stack"
            ]}
        />
    )
}
