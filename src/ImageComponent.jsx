const ImageComponent = () =>{
    return  <div className="flex flex-col items-center w-full h-full child justify-center">
                <div className='book '>
                    <img src={`https://placehold.co/400x500/orange/white?text=Hello+World` } alt='book image'  ></img>
                </div> 
                <div className='text-center'>Issue #1 <br />
                    is sold out. <br />

                    If you are lucky, you may get the last pieces in selected stores.
                </div> 
            
            </div>
}
export default ImageComponent