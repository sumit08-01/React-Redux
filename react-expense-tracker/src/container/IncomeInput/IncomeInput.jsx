import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { addIncomeAction } from "store/expense/expenseslice";

export function IncomeInput(props) {
  const income = useSelector((store) => store.EXPENSE.income);
  const dispatch = useDispatch();

  function submitIncome(e) {
    dispatch(addIncomeAction(Number.parseFloat(e.target.value)));
  }

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue={income}
          onChange={submitIncome}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
