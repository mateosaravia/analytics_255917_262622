const UserBehaviorCard = ({ title, description }) => {
    return (
      <div className="flex flex-col p-4 rounded-xl shadow-xl shadow-black">
          <h1 className="font-mono text-xl font-bold">{title}</h1>
          <p className="text-md font-think">{description}</p>
      </div>
    );
  };
  
  export default UserBehaviorCard;