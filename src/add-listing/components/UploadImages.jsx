import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { storage } from './../../../config/firebaseconfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { db } from './../../../config';
import { CarImages } from './../../../config/schema';
import { eq } from 'drizzle-orm';

function UploadImages({ triggerUploadImages, setLoading, carInfo, mode }) {

    const [selectedFileList, setSelectedFileList] = useState([]);
    const [editCarImagesList, setEditCarImagesList] = useState([]);

    useEffect(() => {
        if (mode === 'edit' && carInfo?.images) {
            setEditCarImagesList(carInfo.images.map(image => image?.imageUrl));
        }
    }, [carInfo, mode]);

    useEffect(() => {
        if (triggerUploadImages) {
            uploadImagesToServer();
        }
    }, [triggerUploadImages]);

    const onFileSelected = (e) => {
        const files = Array.from(e.target.files);
        console.log("Files selected:", files);
        setSelectedFileList(prev => [...prev, ...files]);
    };

    const onImageRemove = (image) => {
        console.log("Removing image:", image);
        setSelectedFileList(prev => prev.filter(item => item !== image));
    };

    const onImageRemoveFromDB = async (image, index) => {
        try {
            const result = await db.delete(CarImages)
                .where(eq(CarImages.id, carInfo?.images[index]?.id))
                .returning({ id: CarImages.id });

            //console.log("Removed image from DB:", result);
            setEditCarImagesList(prev => prev.filter(item => item !== image));
        } catch (error) {
            //console.error("Error removing image from DB:", error);
        }
    };

    const uploadImagesToServer = async () => {
        setLoading(true);
        try {
            const uploadPromises = selectedFileList.map(async (file) => {
                const fileName = `car-images/${Date.now()}-${file.name}`;
                const storageRef = ref(storage, fileName);

                console.log(`Uploading ${file.name} to ${fileName}`);
                const snapshot = await uploadBytes(storageRef, file);
                const downloadUrl = await getDownloadURL(snapshot.ref);

                console.log(`Uploaded ${file.name} successfully. URL: ${downloadUrl}`);
                await db.insert(CarImages).values({
                    imageUrl: downloadUrl,
                    CarListingId: triggerUploadImages
                });
            });

            await Promise.all(uploadPromises);
            console.log("All files uploaded successfully");
        } catch (error) {
            console.error("Error uploading files:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2 className='my-3 font-medium text-xl'>Upload Images</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>

                {mode === 'edit' && editCarImagesList.map((image, index) => (
                    <div key={index} className="relative">
                        <IoIosCloseCircle
                            onClick={() => onImageRemoveFromDB(image, index)}
                            className='absolute m-2 text-lg cursor-pointer'
                        />
                        <img src={image} className='w-full h-[130px] object-cover' alt="Selected file preview" />
                    </div>
                ))}

                {selectedFileList.map((image, index) => (
                    <div key={index} className="relative">
                        <IoIosCloseCircle
                            onClick={() => onImageRemove(image)}
                            className='absolute m-2 text-lg cursor-pointer'
                        />
                        <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover' alt="Selected file preview" />
                    </div>
                ))}

                <label htmlFor='upload-images'>
                    <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-lg'>
                        <h2 className='text-lg text-center text-primary'>+</h2>
                    </div>
                </label>
                <Input
                    type='file'
                    multiple
                    onChange={onFileSelected}
                    id='upload-images'
                    className='opacity-0'
                />
            </div>
        </div>
    );
}

export default UploadImages;
