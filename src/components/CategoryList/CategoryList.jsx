import accounts from "../../assets/icons/accounts.png";
import creative from "../../assets/icons/creative.png";
import marketing from "../../assets/icons/marketing.png";
import chip from "../../assets/icons/chip.png"

const CategoryList = () => {
  return (
    <div className="max-w-7xl mx-auto mt-14">
      <h2 className="text-5xl text-center">Job Category List</h2>
      <p className="text-center mt-3 text-xs">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex gap-5">
        <div className="mt-10">
          <div className="w-72 h-60 bg-slate-100 rounded-lg flex justify-center items-center">
            <div>
              <img src={accounts} alt="" />
              <h4 className="font-bold mt-3">Account & Finance</h4>
              <p className="text-slate-400 text-xs mt-3">300 Jobs Available</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="w-72 h-60 bg-slate-100 rounded-lg flex justify-center items-center">
            <div>
              <img src={creative} alt="" />
              <h4 className="font-bold mt-3">Creative Design</h4>
              <p className="text-slate-400 text-xs mt-3">100+ Jobs Available</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="w-72 h-60 bg-slate-100 rounded-lg flex justify-center items-center">
            <div>
              <img src={marketing} alt="" />
              <h4 className="font-bold mt-3">Marketing & Sales</h4>
              <p className="text-slate-400 text-xs mt-3">150 Jobs Available </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="w-72 h-60 bg-slate-100 rounded-lg flex justify-center items-center">
            <div>
              <img src={chip} alt="" />
              <h4 className="font-bold mt-3">Engineering Job</h4>
              <p className="text-slate-400 text-xs mt-3">224 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
