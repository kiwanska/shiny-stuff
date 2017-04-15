import * as d3 from "d3";
import pie from './charts/pie';
import seniority from './charts/seniority';

export default function charts() {

  const seniorityDataset = [
    { label: 'junior', count: 6 },
    { label: 'regular', count: 92 },
    { label: 'senior', count: 32 }
  ];

  const sexDataset = [
    { label: 'female', count: 8 },
    { label: 'male', count: 122 }
  ];

  pie(seniorityDataset, 'seniority');
  pie(sexDataset, 'sex');

}
