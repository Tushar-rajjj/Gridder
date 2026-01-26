function ArtWorks() {
  let artworks = [
    {
      id: 1,
      title: "Artwork 1",
      description: "Description of artwork 1",
      author: "Author 1",
      img: "https://i.pinimg.com/736x/63/a6/37/63a63743ca06c19be0f960ddc650d720.jpg",
    },
    {
      id: 2,
      title: "Artwork 2",
      description: "Description of artwork 2",
      author: "Author 1",
      img: "https://i.pinimg.com/736x/64/29/d2/6429d290436332f50f4095b19deaf513.jpg",
    },
    {
      id: 3,
      title: "Artwork 3",
      description: "Description of artwork 3",
      author: "Author 1",
      img: "https://i.pinimg.com/1200x/29/93/c2/2993c24b4a4a45e8e407d6463d93656c.jpg",
    },
    {
      id: 4,
      title: "Artwork 3",
      description: "Description of artwork 3",
      author: "Author 1",
      img: "https://i.pinimg.com/736x/32/2c/ba/322cba832ebb71d4e0e678020469eb9c.jpg",
    },
    {
      id: 5,
      title: "Artwork 1",
      description: "Description of artwork 1",
      author: "Author 1",
      img: "https://i.pinimg.com/736x/63/a6/37/63a63743ca06c19be0f960ddc650d720.jpg",
    },
    {
      id: 6,
      title: "Artwork 2",
      description: "Description of artwork 2",
      author: "Author 1",
      img: "https://i.pinimg.com/736x/64/29/d2/6429d290436332f50f4095b19deaf513.jpg",
    },
    {
      id: 7,
      title: "Artwork 3",
      description: "Description of artwork 3",
      author: "Author 1",
      img: "https://i.pinimg.com/1200x/29/93/c2/2993c24b4a4a45e8e407d6463d93656c.jpg",
    },
    {
      id: 8,
      title: "Artwork 3",
      description: "Description of artwork 3",
      author: "Author 1",
      img: "https://i.pinimg.com/736x/32/2c/ba/322cba832ebb71d4e0e678020469eb9c.jpg",
    },
    {
      id: 9,
      title: "Artwork 1",
      description: "Description of artwork 1",
      author: "Author 1",
      img: "https://i.pinimg.com/736x/63/a6/37/63a63743ca06c19be0f960ddc650d720.jpg",
    },
    {
      id: 10,
      title: "Artwork 2",
      description: "Description of artwork 2",
      author: "Author 1",
      img: "https://i.pinimg.com/736x/64/29/d2/6429d290436332f50f4095b19deaf513.jpg",
    },
    {
      id: 11,
      title: "Artwork 3",
      description: "Description of artwork 3",
      author: "Author 1",
      img: "https://i.pinimg.com/1200x/29/93/c2/2993c24b4a4a45e8e407d6463d93656c.jpg",
    },
    {
      id: 12,
      title: "Artwork 3",
      description: "Description of artwork 3",
      author: "Author 1",
      img: "https://i.pinimg.com/736x/32/2c/ba/322cba832ebb71d4e0e678020469eb9c.jpg",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-30 items-center overflow-hidden">
      <h2 className="text-4xl my-3 mt-10 font-semibold">Community ArtWorks</h2>
      <div className="artwork-card-parent relative">
        {/* ArtWorks content goes here */}
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-card relative">
            <img
              src={artwork.img}
              alt={artwork.title}
              className="artwork-image"
            />
            {/* <p>
              <em>by {artwork.author}</em>
            </p> */}
          </div>
        ))}
        <div className="w-full absolute -bottom-auto left-0 h-fit flex flex-col items-center justify-center mt-10 mb-5">
          <h4 className="text-center text-gray-500 text-sm mb-5">
            Please mail us at{" "}
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMGRLhskFxmtzVMjHwlFJTsjmZTNcLzBtkfNPzHBsmgMvXFKbqNzpSLjZgmqRcGtpnFvKg"
              className="underline"
            >
              kumartushar15112003@gmail.com
            </a>{" "}
            to showcase your artwork here.
          </h4>
          <p className="text-center text-gray-500 text-sm mb-5">
            © 2024 Gridder. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArtWorks;
