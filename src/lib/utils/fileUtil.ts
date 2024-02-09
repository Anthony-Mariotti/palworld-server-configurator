import { toast } from 'svelte-sonner';

export const readIniFile = (input: Blob | string): IniFile => {
  // reference: https://gist.github.com/anonymous/dad852cde5df545ed81f1bc334ea6f72
  var regex = {
    section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
    param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
    comment: /^\s*;.*$/
  };

  let file: string = typeof input === 'string' ? input : '';

  if (input instanceof Blob) {
    readFile(input, {
      onload: (event) => {
        const result = event.target?.result;
        if (typeof result === 'string') {
          file = event.target?.result as string;
        }
      },
      onerror: (event) => {
        toast.error('Failed to read file', {
          description: event.target?.error?.message,
          dismissable: true
        });
        console.error(event.target?.error?.message);
      }
    });
  }

  if (file === '') return {};

  var lines: Array<string> = file.split(/[\r\n]+/);

  let section: string | undefined;
  let iniFile: IniFile = {};
  lines.forEach((line: string) => {
    if (regex.comment.test(line)) {
      return;
    }

    if (regex.param.test(line)) {
      const match = line.match(regex.param);

      if (match) {
        if (section) {
          iniFile[section][match[1]] = match[2];
        }
      }
    } else if (regex.section.test(line)) {
      const match = line.match(regex.section);

      if (match) {
        iniFile[match[1]] = {};
        section = match[1];
      }
    } else if (line.length === 0 && section) {
      section = undefined;
    }
  });

  console.log(iniFile);
  return iniFile;
  // end reference
};

export const readFile = (
  file: Blob,
  cb?: {
    onload?: (event: ProgressEvent<FileReader>) => any;
    onerror?: (event: ProgressEvent<FileReader>) => any;
  }
): void => {
  const reader = new FileReader();

  if (cb?.onload) {
    reader.onload = cb.onload;
  }

  if (cb?.onerror) {
    reader.onerror = cb.onerror;
  }

  reader.readAsText(file);
};
