import { allCourses } from "../../data/allCourses"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const AllAvailableCoursesSection = () => {
    const filteredCourses = allCourses;

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Cadeiras Disponíveis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle>{course}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button>
                                Adicionar à Minha Lista
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default AllAvailableCoursesSection