import { render, screen} from '@testing-library/react';
import TrafficLight from './TrafficLight';

describe("Traffic Component", () => {
    test('Traffic Component test', () => {
        render(<TrafficLight initialValue = {0}/>);
        const TextId= screen.getByTestId("textHeader");
        expect(TextId).toHaveTextContent('Traffic Light');
      });
});