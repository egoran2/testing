export default function TestPage() {
  console.log('TestPage rendering');
  
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-600">Test Page</h1>
      <p className="mt-4 text-gray-600">This is a simple test page without next-intl.</p>
    </div>
  );
}