import React from 'react';
import styles from './viewMap.module.css'

const ViewMap = () => {


    
  return (
    <div id="geomap" className={styles["geomap"]} style={{ height: '400px', width: '100%' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin&maptype=satellite&layer=c"
      style={{ border: 0, width: '100%', height: '100%' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Lucknow"
    />
  </div>
  
  )
}

export default ViewMap
