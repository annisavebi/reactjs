import { useState } from "react";


function Books({bookList, store, update, remove}) {
    // console.log(bookList);
    const[ inputBook, setInputBook ] = useState();
    const[ form, setForm ] = useState();

    function handleTitle(event) {
        setInputBook({ ...inputBook, title: event.target.value});
    }
    function handleAuthor(event) {
        setInputBook({ ...inputBook, author: event.target.value});
    }
    function handlePrice(event) {
        setInputBook({ ...inputBook, price: event.target.value});
    }
    function handleStock(event) {
        setInputBook({ ...inputBook, stock: event.target.value});
    }
    function submitAdd(event) {
        event.preventDefault();
        store(inputBook);
    }
    function showCreate() {
        setForm("create");
    }
    function showEdit(book) {
        setInputBook(book);

        setForm("edit");
    }
    function submitChange(event) {
        event.preventDefault();
        update(inputBook);
        setForm("");
    }
    function deleteBook(book) {
        remove(book);
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center">Books Management</h1>
            { form === "create" &&(
            <div id="addForm">
                <h5>Add New Book</h5>
                <hr/>
                <form className="form-now" onSubmit={submitAdd}>
                    <div className="col-3">
                        <input type="text" name="title" className="form-control mx-2" placeholder="Title" onChange={handleTitle}/>
                    </div>
                    <div className="col-3">
                        <input type="text" name="author" className="form-control mx-2" placeholder="Author" onChange={handleAuthor}/>
                    </div>
                    <div className="col-3">
                        <input type="text" name="price" className="form-control mx-2" placeholder="Price" onChange={handlePrice}/>
                    </div>
                    <div className="col-3">
                        <input type="text" name="stock" className="form-control mx-2" placeholder="Stock" onChange={handleStock}/>
                    </div>
                    <div className="col-3">
                        <input type="submit" className="btn btn-secondary ml-5" value="Save"/>
                    </div>
                </form>
            </div>
            )}

            { form === "edit" && (
            <div id="changeForm">
                <h5>Change Data</h5>
                <hr/>
                <form className="form-row" onSubmit={submitChange}>
                    <div className="col-3">
                        <input type="text" name="title" className="form-control mx-2" placeholder="Title" onChange={handleTitle} value={inputBook.title}/>
                    </div>
                    <div className="col-3">
                        <input type="text" name="author" className="form-control mx-2" placeholder="Author" onChange={handleAuthor} value={inputBook.author}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="price" className="form-control mx-2" placeholder="Price" onChange={handlePrice} value={inputBook.price}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="stock" className="form-control mx-2" placeholder="Stock" onChange={handleStock} value={inputBook.stock}/>
                    </div>
                    <div className="col-2">
                        <input type="submit" className="btn btn-warning ml-2" value="Edit"/>
                    </div>
                </form>
            </div>
            )}

            <div id="booksList">
                <h2 className="mt-3">Books List</h2>
                <hr/>
                <button className="btn btn-primary m-2" onClick={showCreate}>Add New Book</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((book, index) => (
                            <tr key={index}>
                                <td> {index+1} </td>
                                <td> {book.title} </td>
                                <td> {book.author} </td>
                                <td> {book.price} </td>
                                <td> {book.stock} </td>
                                <td>
                                    <button className="btn btn-info mr-3" onClick={() => showEdit(book)}>Edit</button> &nbsp;
                                    <button className="btn btn-danger" onClick={() => deleteBook(book)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Books;