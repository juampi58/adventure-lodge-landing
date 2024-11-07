import Image from 'next/image'
export default function Page() {
  
    return (
      <div className="grid lg:grid-cols-2 gap-3 w-90%">
	  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
		<figure className="relative w-full h-60">
		  <Image width={200} height={140} className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://cdn.pixabay.com/photo/2022/11/02/04/07/deer-7563934_1280.jpg" alt="Image Description"/>
		</figure>
		<figure className="relative w-full h-60">
		  <Image width={200} height={140} className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://cdn.pixabay.com/photo/2019/10/15/13/36/mist-4551691_1280.jpg" alt="Image Description"/>
		</figure>
	  </div>
	  <figure className="relative w-full h-72 sm:h-96 lg:h-full">
		<Image width={200} height={200} className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt="Image Description"/>
	  </figure>
	</div>
    )
    
  }