import GenericServicePage from "../template"

export default function articlesPage() {
    return (
        <GenericServicePage 
            title="Articles"
            description="In-depth articles and thought leadership pieces for your industry."
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
