import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import image7 from '@/assets/image7.png';
import image8 from '@/assets/image8.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image1, image2, image3, image4, image5, image6, image7, image8];

export default function GalleryGridSection() {
    return (
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-[15px] py-8 px-4 sm:px-8 md:px-[50px]">
            {images.map((img, idx) => (
                <div key={idx} className="bg-[#18181b] rounded-2xl overflow-hidden flex items-center justify-center aspect-square shadow-lg">
                    <img src={img} alt={`gallery-${idx + 1}`} className="object-cover w-full h-full" />
                </div>
            ))}
        </div>
    )
} 