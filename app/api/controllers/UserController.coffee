module.exports = get: (req, res) ->
  User.find().exec (err, users) ->
    if err
      return res.json(err)
    res.json users
  return