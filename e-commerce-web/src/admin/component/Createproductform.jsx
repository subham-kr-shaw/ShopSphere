import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createproduct } from '../../state/product/Action'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import nav from '../../customer/components/navigation/nav'

// ─── Build cascading options from nav ────────────────────────────────────────

const levelOneOptions = nav.categories.map(cat => ({
  label: cat.name,
  value: cat.name,
}))

const getLevelTwoOptions = (levelone) => {
  const cat = nav.categories.find(c => c.name === levelone)
  if (!cat) return []
  const seen = new Set()
  return cat.sections
    .filter(s => { if (seen.has(s.name)) return false; seen.add(s.name); return true })
    .map(s => ({ label: s.name, value: s.name }))
}

const getLevelThreeOptions = (levelone, leveltwo) => {
  const cat = nav.categories.find(c => c.name === levelone)
  if (!cat) return []
  const section = cat.sections.find(s => s.name === leveltwo)
  if (!section) return []
  return section.items
    .filter(item => item.id !== 'all')
    .map(item => {
      const parts = item.to.replace(/^\//, '').split('/')
      return { label: item.name, value: parts[2] || item.name }
    })
}

// ─────────────────────────────────────────────────────────────────────────────

const initalsizes = [
  { name: "S", quantity: 0 },
  { name: "L", quantity: 0 },
  { name: "M", quantity: 0 },
]

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  marginBottom: "16px",
}

const fieldStyle = {
  flex: "1 1 200px",
  minWidth: "0",
}

const Createproductform = () => {
  const [productdata, setproductdata] = useState({
    imageurl: "",
    brand: "",
    title: "",
    color: "",
    discountedprice: "",
    price: "",
    discountpercent: "",
    size: initalsizes,
    quantity: "",
    toplevelcategory: "",
    secondlevelcategory: "",
    thirdlevelcategory: "",
    description: "",
  })

  const dispatch = useDispatch()

  const handlechange = (e) => {
    const { name, value } = e.target
    setproductdata(prev => ({ ...prev, [name]: value }))
  }

  // ─── Cascading handlers ──────────────────────────────────────────────────
  const handleLevelOne = (e) => {
    setproductdata(prev => ({
      ...prev,
      toplevelcategory: e.target.value,
      secondlevelcategory: "",
      thirdlevelcategory: "",
    }))
  }

  const handleLevelTwo = (e) => {
    setproductdata(prev => ({
      ...prev,
      secondlevelcategory: e.target.value,
      thirdlevelcategory: "",
    }))
  }

  const handleLevelThree = (e) => {
    setproductdata(prev => ({
      ...prev,
      thirdlevelcategory: e.target.value,
    }))
  }
  // ────────────────────────────────────────────────────────────────────────

  const handlesizechange = (e, index) => {
    let { name, value } = e.target
    name === "size_quantity" ? name = "quantity" : name = e.target.name
    const sizes = [...productdata.size]
    sizes[index][name] = value
    setproductdata(prev => ({ ...prev, size: sizes }))
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    dispatch(createproduct(productdata))
    console.log(productdata)
  }

  const levelTwoOptions = getLevelTwoOptions(productdata.toplevelcategory)
  const levelThreeOptions = getLevelThreeOptions(productdata.toplevelcategory, productdata.secondlevelcategory)

  return (
    <Fragment>
      <Typography variant='h3' sx={{ textAlign: "center", py: 4 }}>
        Add new product
      </Typography>

      <form onSubmit={handlesubmit} style={{ padding: "0 24px 40px" }}>

        {/* Row 1: Image URL */}
        <div style={{ marginBottom: "16px" }}>
          <TextField
            fullWidth
            label="Image URL"
            name='imageurl'
            value={productdata.imageurl}
            onChange={handlechange}
          />
        </div>

        {/* Row 2: Brand | Title */}
        <div style={rowStyle}>
          <div style={fieldStyle}>
            <TextField
              fullWidth
              label="Brand"
              name='brand'
              value={productdata.brand}
              onChange={handlechange}
            />
          </div>
          <div style={fieldStyle}>
            <TextField
              fullWidth
              label="Title"
              name='title'
              value={productdata.title}
              onChange={handlechange}
            />
          </div>
        </div>

        {/* Row 3: Color | Quantity */}
        <div style={rowStyle}>
          <div style={fieldStyle}>
            <TextField
              fullWidth
              label="Color"
              name='color'
              value={productdata.color}
              onChange={handlechange}
            />
          </div>
          <div style={fieldStyle}>
            <TextField
              fullWidth
              label="Quantity"
              name='quantity'
              value={productdata.quantity}
              onChange={handlechange}
            />
          </div>
        </div>

        {/* Row 4: Price | Discounted Price | Discount % */}
        <div style={rowStyle}>
          <div style={fieldStyle}>
            <TextField
              fullWidth
              label="Price"
              name='price'
              value={productdata.price}
              onChange={handlechange}
            />
          </div>
          <div style={fieldStyle}>
            <TextField
              fullWidth
              label="Discount Price"
              name='discountedprice'
              value={productdata.discountedprice}
              onChange={handlechange}
            />
          </div>
          <div style={fieldStyle}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name='discountpercent'
              value={productdata.discountpercent}
              onChange={handlechange}
            />
          </div>
        </div>

        {/* Row 5: Top | Second | Third Level Category */}
        <div style={rowStyle}>

          {/* Top Level */}
          <div style={fieldStyle}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name='toplevelcategory'
                value={productdata.toplevelcategory}
                onChange={handleLevelOne}
                label="Top Level Category"
              >
                {levelOneOptions.map(opt => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* Second Level */}
          <div style={fieldStyle}>
            <FormControl fullWidth disabled={!productdata.toplevelcategory}>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name='secondlevelcategory'
                value={productdata.secondlevelcategory}
                onChange={handleLevelTwo}
                label="Second Level Category"
              >
                {levelTwoOptions.map(opt => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* Third Level */}
          <div style={fieldStyle}>
            <FormControl fullWidth disabled={!productdata.secondlevelcategory}>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name='thirdlevelcategory'
                value={productdata.thirdlevelcategory}
                onChange={handleLevelThree}
                label="Third Level Category"
              >
                {levelThreeOptions.map(opt => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

        </div>

        {/* Row 6: Description */}
        <div style={{ marginBottom: "16px" }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Description"
            name='description'
            value={productdata.description}
            onChange={handlechange}
          />
        </div>

        {/* Size rows */}
        {productdata.size.map((size, index) => (
          <div key={index} style={rowStyle}>
            <div style={fieldStyle}>
              <TextField
                fullWidth
                label="Size Name"
                name='name'
                value={size.name}
                onChange={(e) => handlesizechange(e, index)}
                required
                InputLabelProps={{ shrink: true }}
              />
            </div>
            <div style={fieldStyle}>
              <TextField
                fullWidth
                label="Quantity"
                name='size_quantity'
                onChange={(e) => handlesizechange(e, index)}
                required
                InputLabelProps={{ shrink: true }}
              />
            </div>
          </div>
        ))}

        {/* Submit */}
        <div style={{ marginTop: "8px" }}>
          <Button
            variant='contained'
            sx={{ p: 1.8 }}
            size='large'
            type='submit'
          >
            Add New Product
          </Button>
        </div>

      </form>
    </Fragment>
  )
}

export default Createproductform