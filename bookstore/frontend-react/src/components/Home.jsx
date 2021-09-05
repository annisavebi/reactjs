function Home({ bookList }) {
    return (
        <div className="container mt-3 w-75">
            <h1 className="text-center">Welcome in Roslainee Book Store</h1>
            <div id="catalog" className="mt-5"></div>
            <h2>Book's Catalog</h2>
            <hr/>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((book, index) => (
                        <tr key={book._id}>
                            <td>{index + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td>{book.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;