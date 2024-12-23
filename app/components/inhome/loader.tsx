export default function Loader() {
    return (
      <div className="relative transform-gpu translate3d-0 rotate-x-[-24deg] rotate-y-[28deg] scale-100 animate-[scale_2.6s_infinite_0.65s] min-h-screen flex items-center justify-center">
        <div className="absolute bottom-0 w-[120px] h-[120px] bg-black opacity-20 transform rotate-x-[90deg] translate-z-[-60px] scale-95 animate-[squish-squosh_2.6s_infinite_0.65s], fade_2.6s_infinite_0.65s"></div>
        
        <div className="animate-[jump_2.6s_infinite_0.65s]">
          <div className="animate-[spin_2.6s_infinite_0.65s]">
            <div className="w-[120px] h-[120px] aspect-[1] transform-origin-[50%_50%] animate-[squish-squosh_2.6s_infinite_0.65s]">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-[calc(20px*1px)] top-0 bg-[#3a0ca3] transform translate-y-[-50%] rotate-x-[90deg]"></div>
                <div className="absolute w-[calc(20px*1px)] h-full top-1/2 right-0 bg-[#4cc9f0] transform translate-x-[50%] translate-y-[-50%] rotate-y-[90deg]"></div>
                <div className="absolute w-full h-[calc(20px*1px)] bottom-0 bg-[#3a0ca3] transform translate-y-[50%] rotate-x-[90deg]"></div>
                <div className="absolute w-[calc(20px*1px)] h-full left-0 top-1/2 bg-[#4cc9f0] transform translate-x-[-50%] translate-y-[-50%] rotate-y-[90deg]"></div>
                <div className="absolute w-full h-full transform translate-z-[10px] bg-[#4361ee] top-0 left-0"></div>
                <div className="absolute w-full h-full transform translate-z-[-10px] rotate-y-[180deg] bg-[#4361ee] top-0 left-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  