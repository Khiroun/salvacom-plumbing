const AdminPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <iframe
        src="https://salvacom-plumbing-admin.vercel.app/"
        width="100%"
        height="100%"
        style={{
          height: "100%",
          position: "absolute",
          borderWidth: 0,
        }}
      />
    </div>
  );
};

export default AdminPage;
