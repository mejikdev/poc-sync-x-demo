import employee from "../../public/mock/data/employees.json";

export default function handler(req, res) {
  res.status(200).json(employee);
}
