const notFound = (req, res) => {
    res.status(404).send('Something went wrong!')
}

module.exports = notFound;