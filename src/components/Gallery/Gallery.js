import React from 'react';
import './Gallery.css'

const Gallery = () => {
 const images =[
    {
        img:"https://images.unsplash.com/photo-1666401715774-e93b5b204bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title:"HP-Laptop",
        des:"thakbi amr sate sara jibon",
    },
    {   
        img:"https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title:"Apple MacBook ",
        des:"thakbi amr sate sara jibon",
    },
    {
        img:"https://images.unsplash.com/photo-1572456606764-80a4f00cbe52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title:"Dell",
        des:"thakbi amr sate sara jibon",
    },
    {   
       img:"https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        title:"Microsoft",
        des:"thakbi amr sate sara jibon",
    },
    {
        img:"https://images.unsplash.com/flagged/photo-1581390476491-1b12adda69d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title:"Huawei",
        des:"thakbi amr sate sara jibon",
    },
    {
        img:"https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
        title:"ASUS",
        des:"thakbi amr sate sara jibon",
    },
    {
        img:"https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        title:"Lenovo",
        des:"thakbi amr sate sara jibon",
    },
    {
        img:"https://images.unsplash.com/photo-1604074131665-7a4b13870ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title:"Asus Zenbook ",
        des:"thakbi amr sate sara jibon",
    },
    
 ]

 return (
  <div>
    <h1>This is Gallery</h1>
<div className='gallery'>
{
    images.map((image)=>{
   return(
    <div>
        <div>
        <img className='img' src={image.img} alt=""></img>
        </div>
        <div className='litle-setup'>
        <h2>{image.title}</h2>
        <p>{image.des}</p>
        </div>
    </div>
   )
    })
}
</div>
</div>
);
};

export default Gallery;