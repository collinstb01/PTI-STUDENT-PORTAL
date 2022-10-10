
<div className="form-group">
<label>File upload</label>
{/* <input 
onChange={handleChange} name="image" value={staffData.image} 
 type="file" name="img[]" className="file-upload-default" /> */}

<div className="input-group col-xs-12">
  {/* <input 
  onChange={handleChange} name="image" value={staffData.image} 
   type="text" className="form-control file-upload-info" disabled placeholder="Upload Image" /> */}
  <span className="input-group-append">
    <button className="file-upload-browse btn btn-primary" type="button">
      Upload
      <FileBase 
  type="file"
  multiple={false}
  onDone={({ base64 }) => setStaffData({...staffData, image: base64})}
  // style={{}}
  />
    </button>
  </span>
</div>
</div>