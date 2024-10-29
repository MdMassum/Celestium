import React, { useEffect } from 'react'; 
import moon from '../../assets/palmistry/moon.svg';
import loading from '../../assets/palmistry/loading2.svg';
import { useNavigate } from 'react-router-dom';

const PalmAnalysis: React.FC = () => {

    const navigate = useNavigate();
    useEffect(() => {
      setTimeout(() => {
        navigate('/palmResult')
      }, 2000);
    }, [])
    
  return (
    <div className='min-h-screen flex items-center justify-center relative mt-20 md:mt-0'>
        <div className='flex flex-col items-center justify-center gap-2 font-semibold absolute'>
            <p className='tracking-wider'>Analyzing</p>
            <img src={loading} alt="" className='h-8' />
        </div>
        
      <img src={moon} alt="Moon symbol for palmistry" className="h-96" />
    </div>
  );
};

export default PalmAnalysis;
