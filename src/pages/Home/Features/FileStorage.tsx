import CodeBlock from "@/components/CodeBlock";
import GlowingButton from "@/components/GlowingButton";

const code = {
  js: {
    upload: {
      filename: "less/apis/files/upload/post.js",
      code: `const { files } = require('@chuva.io/less');

exports.process = async (request, response) => {
  // Creating a url to upload file, expires in 2 hours
  const url = await files.create_upload_url(
    'my_files/document.txt',
    { 'expires_in': 7200 }
  );

  response.body = { upload_url: url };
  return response;
};`,
    },
    download: {
      filename: "less/apis/files/download/get.js",
      code: `const { files } = require('@chuva.io/less');

exports.process = async (request, response) => {
  // Get the URL to access the file
  const url = await files.get_url('my_files/document.txt');

  response.body = { download_url: url };
  return response;
};`,
    },
  },
  py: {
    upload: {
      filename: "less/functions/file_handler/index.py",
      code: `from less import files

def process(file_path):
    # Create public file upload URL
    url = files.create_upload_url(
        f'public/{file_path}',
        {'expires_in': 7200}
    )
    return {'upload_url': url}`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="space-y-6">
    <p>
      File Storage is backed by <strong>Amazon S3</strong> and uses pre-signed
      URLs for secure file upload and download.
    </p>

    <div>
      <h4 className="mb-2 text-lg font-semibold">
        Create a pre-signed file upload URL
      </h4>
      <CodeBlock
        language="javascript"
        filename={code.js.upload.filename}
        code={code.js.upload.code}
      />
    </div>

    <div>
      <h4 className="mb-2 text-lg font-semibold">
        Retrieve file download URLs
      </h4>
      <CodeBlock
        language="javascript"
        filename={code.js.download.filename}
        code={code.js.download.code}
      />
    </div>

    <GlowingButton
      title={"Visit the File Storage Documentation"}
      href={"https://less.chuva.io/file-storage"}
      newTab
    />
  </div>
);
