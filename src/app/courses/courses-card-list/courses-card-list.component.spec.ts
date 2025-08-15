import { render, screen } from '@testing-library/angular';
import {CoursesCardListComponent} from './courses-card-list.component';
import {CoursesModule} from '../courses.module';
import {setupCourses} from '../common/setup-test-data';

describe('CoursesCardListComponent', () => {

    it('should display the first course', async () => {

        const courses = setupCourses();
        const firstCourse = courses[0];

        await render(CoursesCardListComponent, {
            imports: [CoursesModule],
            componentProperties: {
                courses: courses
            }
        });

        const courseTitle = screen.getByText(firstCourse.titles.description);
        expect(courseTitle).toBeTruthy();

        const allImages = screen.getAllByRole('img');
        const courseImage = allImages.find(img => img.getAttribute('src') === firstCourse.iconUrl);
        expect(courseImage).toBeTruthy();
        expect(courseImage!.getAttribute('src')).toBe(firstCourse.iconUrl);

    });

});
