const PurchasesCard = ({ title, data1, data2 }) => {
    return (
      <div className="flex flex-col p-4 rounded-xl shadow-xl shadow-black">
          <h1 className="font-mono text-xl font-bold">{title}</h1>
          <p className="text-md font-think">{data1}</p>
          <p className="text-md font-think">{data2}</p>
      </div>
    );
  };
  
  export default PurchasesCard;