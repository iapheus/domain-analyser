import React from 'react';

const Dropdown = ({ title, content, level }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div style={{ marginLeft: level * 5, marginTop: 5 }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer', fontWeight: 'bold' }}
      >
        {title} {isOpen ? <span style={{ color: 'orange' }}>[-]</span> 
                        : <span style={{ color: '#5bff5d' }}>[+]</span>}
      </div>
      {isOpen && (
        <div style={{ marginLeft: 5, marginTop: 5 }}>
          {renderObject(content, level + 1)}
        </div>
      )}
    </div>
  );
};

const renderArray = (arr, level = 0) => {
  return (
    <div>
      {arr.map((item, index) => (
        <div key={index} style={{ marginLeft: level * 5, marginTop: 5 }}>
          {item && typeof item === 'object' ? renderObject(item, level + 1) : item.toString()}
        </div>
      ))}
    </div>
  );
};

const renderObject = (obj, level = 0) => {
  return (
    <div>
      {Object.entries(obj).map(([key, value], index) => (
        Array.isArray(value) ? (
          <Dropdown key={index} title={key} content={value} level={level} />
        ) : typeof value === 'object' && value !== null ? (
          <Dropdown key={index} title={key} content={value} level={level} />
        ) : (
          <div key={index} style={{ marginLeft: level * 5, marginTop: 5 }}>
            <strong>{key}:</strong> 
            <span>{value != null ? value.toString() : 'null'}</span>
          </div>
        )
      ))}
    </div>
  );
};

function InfoBar({ data }) {
  if (data.error) {
    return (
      <div className="relative drop-shadow-xl max-w-lg min-h-48 overflow-hidden rounded-xl bg-[#072030] border-2 border-[#76ABAE]">
        <div className="relative flex flex-col text-white z-1 opacity-90 rounded-xl bg-[#072030] p-4 inset-0.5 shadow-inner">
          <h1 className="text-[#5bff5d] text-center text-2xl underline decoration-[#76ABAE] mb-4">
            Error
          </h1>
          <div className="w-full">
            <strong>Error:</strong> <span>{data.error}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative drop-shadow-xl max-w-lg min-h-48 overflow-hidden rounded-xl bg-[#072030] border-2 border-[#76ABAE]">
      <div className="relative flex flex-col text-white z-1 opacity-90 rounded-xl bg-[#072030] p-4 inset-0.5 shadow-inner">
        <h1 className="text-[#5bff5d] text-center text-2xl underline decoration-[#76ABAE] mb-4">
          {data.title.charAt(0).toUpperCase() + data.title.slice(1)  || 'Title'}
        </h1>
        <div className="w-full">
          {data.data && (Array.isArray(data.data) ? renderArray(data.data) : renderObject(data.data))}
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
