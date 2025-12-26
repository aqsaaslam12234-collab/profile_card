const ProfileCard = () => {
  return (
    <div className="h-screen flex items-center justify-center">
        <div className="bg-purple-300 w-220 h-120 flex rounded-2xl">
            <div className="w-1/2 flex justify-between items-start flex-col pl-10">
            <div className="h-1/3 pt-10 font-medium text-2xl">Super Protech Ltd</div>
            <div className="h-1/3 flex flex-col gap-2">
            <p className="text-white font-bold text-5xl pl-3 ">Company</p>
            <p className="text-white font-bold text-5xl pl-3">Town Hall</p>
            <p className="text-white text-2xl pl-3">January 8,2015</p>
          </div>
           <div className="h-1/3">
            <button className="bg-white text-purple-800 px-16 py-1 rounded-sm mt-16">WATCH FROM HERE</button>
          </div>

            </div>
            <div className="w-1/2 flex items-center justify-center">
          <img
            className="h-100 w-96 border-white rounded-4xl border-2 object-cover"
            src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Animated Image Of Girk"
          />
        </div>

        </div>

    </div>
    
  );
};

export default ProfileCard;
