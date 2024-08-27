import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { storage } from './../../../config/firebaseconfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { db } from './../../../config';
import { CarImages } from './../../../config/schema';

function UploadImages({ triggerUploadImages,setLoading }) {

    const [selectedFileList, setSelectedFileList] = useState([]);

    useEffect(() => {
        if (triggerUploadImages) {
            UploadImageToServer();
        }
    }, [triggerUploadImages]);

    const onFileSelected = (e) => {
        const files = e.target.files;
        console.log(files);
        for (let i = 0; i < files?.length; i++) {
            const file = files[i];
            setSelectedFileList((prev) => [
                ...prev, file
            ]);
        }
    };

    const onImageRemove = (image, index) => {
        const result = selectedFileList.filter((item) => item !== image);
        setSelectedFileList(result);
    };

    const UploadImageToServer = async () => {
        setLoadinge(true)
        try {
            const uploadPromises = selectedFileList.map(async (file) => {
                const fileName = `car-images/${Date.now()}-${file.name}`;
                const storageRef = ref(storage, fileName);
                const metaData = {
                    contentType: file.type,
                };

                const snapshot = await uploadBytes(storageRef, file, metaData);
                console.log("Uploaded:", snapshot);

                const downloadUrl = await getDownloadURL(snapshot.ref);
                console.log("Download URL:", downloadUrl);

                // Add to DB here (if needed)
               await db.insert(CarImages).values({
                imageUrl:downloadUrl,
                CarListingId:triggerUploadImages
               })
            });

            await Promise.all(uploadPromises);
            console.log("All files uploaded successfully");
            setLoading(false)

        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };

    return (
        <div>
            <h2 className='my-3 font-medium text-xl'>Upload Images</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                {selectedFileList.map((image, index) => (
                    <div key={index} className="relative">
                        <IoIosCloseCircle
                            onClick={() => onImageRemove(image, index)}
                            className='absolute m-2 text-lg cursor-pointer'
                        />
                        <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover' alt="Selected file preview" />
                    </div>
                ))}

                <label htmlFor='upload-images'>
                    <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-lg'>
                        <h2 className='text-lg text-center text-primary '>+</h2>
                    </div>
                </label>
                <Input type='file' multiple={true}
                    onChange={onFileSelected}
                    id='upload-images' className='opacity-0' />
            </div>
        </div>
    );
}

export default UploadImages;
