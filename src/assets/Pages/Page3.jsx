import React from 'react'

const Page3 = ({darkMode}) => {

  return (
    <div className='parent w-full '>
      <div className="child p-8">
        <h1 className='text-2xl mb-3 '>Research Journals for Publications</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-centerr">
          <div className="journal">
            <h1 className='text-center'>Journal name</h1>
            <div className={darkMode !=true ? "shadow-2xl  p-4  w-max":"shadow-2xl  p-4  w-max bg-white text-black"}>
  <form className="flex items-center gap-3">
    <div className="row1 flex flex-col items-center gap-1">
      <span className="px-1 py-1 w-full text-center">ISSN</span>
      <span className="px-1 py-1 w-full text-center">WOS</span>
      <span className="px-1 py-1 w-full text-center">Scopus</span>
      <span className="px-1 py-1 w-full text-center">HEC</span>
    </div>
    <div className="row2 flex flex-col items-center gap-1">
      <input type="text" className="border-[1px] border-black px-1 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-1 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-1 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-1 py-1 w-32" />
    </div>
    <div className="row2 flex flex-col items-center gap-1">
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
    </div>
  </form>

  {/* Footer: WhatsApp Icon + Submit Button */}
  <div className="flex justify-around gap-4 mt-4">
    <div style={{ padding: '8px', textAlign: 'center' }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: '24px', height: '24px' }}
      />
    </div>
    <button
      style={{
        padding: '8px 16px',
        borderRadius: '12px',
        backgroundColor: '#ef4444',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Submit
    </button>
  </div>
</div>
</div>
{/* END jOURNAL E */}

{/*2 JOURNAL DUV */}
<div className="journal">
            <h1 className='text-center'>Journal name</h1>
            <div className={darkMode !=true ? "shadow-2xl  p-4  w-max":"shadow-2xl  p-4  w-max bg-white text-black"}>
  <form className="flex items-center gap-3">
    <div className="row1 flex flex-col items-center gap-1">
      <span className="px-2 py-1 w-full text-center">ISSN</span>
      <span className="px-2 py-1 w-full text-center">WOS</span>
      <span className="px-2 py-1 w-full text-center">Scopus</span>
      <span className="px-2 py-1 w-full text-center">HEC</span>
    </div>
    <div className="row2 flex flex-col items-center gap-1">
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
    </div>
    <div className="row2 flex flex-col items-center gap-1">
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
    </div>
  </form>

  {/* Footer: WhatsApp Icon + Submit Button */}
  <div className="flex justify-around gap-4 mt-4">
    <div style={{ padding: '8px', textAlign: 'center' }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: '24px', height: '24px' }}
      />
    </div>
    <button
      style={{
        padding: '8px 16px',
        borderRadius: '12px',
        backgroundColor: '#ef4444',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Submit
    </button>
  </div>
</div>
</div>
{/*  */}
<div className="journal">
            <h1 className='text-center'>Journal name</h1>
            <div className={darkMode !=true ? "shadow-2xl  p-4  w-max":"shadow-2xl  p-4  w-max bg-white text-black"}>
  <form className="flex items-center gap-3">
    <div className="row1 flex flex-col items-center gap-1">
      <span className="px-2 py-1 w-full text-center">ISSN</span>
      <span className="px-2 py-1 w-full text-center">WOS</span>
      <span className="px-2 py-1 w-full text-center">Scopus</span>
      <span className="px-2 py-1 w-full text-center">HEC</span>
    </div>
    <div className="row2 flex flex-col items-center px-2 gap-1">
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
    </div>
    <div className="row2 flex flex-col items-center gap-1">
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
    </div>
  </form>

  {/* Footer: WhatsApp Icon + Submit Button */}
  <div className="flex justify-around gap-4 mt-4">
    <div style={{ padding: '8px', textAlign: 'center' }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: '24px', height: '24px' }}
      />
    </div>
    <button
      style={{
        padding: '8px 16px',
        borderRadius: '12px',
        backgroundColor: '#ef4444',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Submit
    </button>
  </div>
</div>
</div>
<div className="journal">
            <h1 className='text-center'>Journal name</h1>
            <div className={darkMode !=true ? "shadow-2xl  p-4  w-max":"shadow-2xl  p-4  w-max bg-white text-black"}>
  <form className="flex items-center gap-3">
    <div className="row1 flex flex-col items-center gap-1">
      <span className="px-2 py-1 w-full text-center">ISSN</span>
      <span className="px-2 py-1 w-full text-center">WOS</span>
      <span className="px-2 py-1 w-full text-center">Scopus</span>
      <span className="px-2 py-1 w-full text-center">HEC</span>
    </div>
    <div className="row2 flex flex-col  items-center gap-1">
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
    </div>
    <div className="row2 flex flex-col items-center px-2  gap-1">
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
    </div>
  </form>

  {/* Footer: WhatsApp Icon + Submit Button */}
  <div className="flex justify-around gap-4 mt-4">
    <div style={{ padding: '8px', textAlign: 'center' }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: '24px', height: '24px' }}
      />
    </div>
    <button
      style={{
        padding: '8px 16px',
        borderRadius: '12px',
        backgroundColor: '#ef4444',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Submit
    </button>
  </div>
</div>
</div>
<div className="journal">
            <h1 className='text-center'>Journal name</h1>
            <div className={darkMode !=true ? "shadow-2xl  p-4  w-max":"shadow-2xl  p-4  w-max bg-white text-black"}>
  <form className="flex items-center gap-3">
    <div className="row1 flex flex-col items-center gap-1">
      <span className="px-2 py-1 w-full text-center">ISSN</span>
      <span className="px-2 py-1 w-full text-center">WOS</span>
      <span className="px-2 py-1 w-full text-center">Scopus</span>
      <span className="px-2 py-1 w-full text-center">HEC</span>
    </div>
    <div className="row2 flex flex-col  items-center gap-1">
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
    </div>
    <div className="row2 flex flex-col items-center px-2  gap-1">
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
    </div>
  </form>

  {/* Footer: WhatsApp Icon + Submit Button */}
  <div className="flex justify-around gap-4 mt-4">
    <div style={{ padding: '8px', textAlign: 'center' }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: '24px', height: '24px' }}
      />
    </div>
    <button
      style={{
        padding: '8px 16px',
        borderRadius: '12px',
        backgroundColor: '#ef4444',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Submit
    </button>
  </div>
</div>
</div>
<div className="journal">
            <h1 className='text-center'>Journal name</h1>
            <div className={darkMode !=true ? "shadow-2xl  p-4  w-max":"shadow-2xl  p-4  w-max bg-white text-black"}>
  <form className="flex items-center gap-3">
    <div className="row1 flex flex-col items-center gap-1">
      <span className="px-2 py-1 w-full text-center">ISSN</span>
      <span className="px-2 py-1 w-full text-center">WOS</span>
      <span className="px-2 py-1 w-full text-center">Scopus</span>
      <span className="px-2 py-1 w-full text-center">HEC</span>
    </div>
    <div className="row2 flex flex-col  items-center gap-1">
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
    </div>
    <div className="row2 flex flex-col items-center px-2  gap-1">
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
      <input type="text" className="border-[1px] border-black px-2 py-1 w-32" />
    </div>
  </form>

  {/* Footer: WhatsApp Icon + Submit Button */}
  <div className="flex justify-around gap-4 mt-4">
    <div style={{ padding: '8px', textAlign: 'center' }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: '24px', height: '24px' }}
      />
    </div>
    <button
      style={{
        padding: '8px 16px',
        borderRadius: '12px',
        backgroundColor: '#ef4444',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Submit
    </button>
  </div>
</div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Page3
