const BlobBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent to-secondary" />
      
      {/* Large blob top right */}
      <div 
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-40"
        style={{
          background: `radial-gradient(circle, hsl(var(--blob-lighter)), hsl(var(--blob-light)))`
        }}
      />
      
      {/* Medium blob bottom left */}
      <div 
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-30"
        style={{
          background: `radial-gradient(circle, hsl(var(--blob-light)), transparent)`
        }}
      />
      
      {/* Small blob middle */}
      <div 
        className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full opacity-25"
        style={{
          background: `radial-gradient(circle, hsl(var(--blob-lighter)), transparent)`
        }}
      />
    </div>
  );
};

export default BlobBackground;
