import * as d3 from "d3";
import pie from './charts/pie';
import bar from './charts/bar';

export default function charts() {

  const seniorityDataset = {
    dataset: [
      { label: 'senior', count: 32 },
      { label: 'regular', count: 92 },
      { label: 'junior', count: 6 }
    ],
    id: 'seniority',
    size: 300
  };

  const sexDataset = {
    dataset: [
      { label: 'male', count: 122 },
      { label: 'female', count: 8 }
    ],
    id: 'sex',
    size: 300
  };

  pie(seniorityDataset);
  pie(sexDataset);

}
