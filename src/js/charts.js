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

  const specialityDataset = [
    { label: 'jr ror', count: 5 },
    { label: 'ror', count: 50 },
    { label: 'sr ror', count: 24 },
    { label: 'jr frontend', count: 1 },
    { label: 'frontend', count: 19 },
    { label: 'sr frontend', count: 4 },
    { label: 'jr android', count: 0 },
    { label: 'android', count: 12 },
    { label: 'sr android', count: 1 },
    { label: 'jr ios', count: 0 },
    { label: 'ios', count: 9 },
    { label: 'sr ios', count: 3 },
    { label: 'jr devops', count: 0 },
    { label: 'devops', count: 2 },
    { label: 'sr devops', count: 0 }
  ]

  pie(seniorityDataset);
  pie(sexDataset);
  bar(specialityDataset);

}
