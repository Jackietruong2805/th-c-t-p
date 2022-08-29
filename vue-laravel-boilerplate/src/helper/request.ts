import ky from 'ky';
import type { Input, Options } from 'ky/distribution/types/options';

export function getCSRFToken() {
  const $inputToken: HTMLInputElement | null = document.querySelector(
    'input[type=hidden][name="_token"]'
  );
  if ($inputToken) {
    return $inputToken.value || '';
  }

  const $metaToken: HTMLMetaElement | null = document.querySelector(
    'meta[name="csrf-token"]'
  );
  if ($metaToken) {
    return $metaToken.content || $metaToken.getAttribute('value') || '';
  }

  return '';
}

export async function get<R>(url: Input, data?: any, options?: Options) {
  const params = new URLSearchParams(data);
  return await ky
    .get(
      `${url}?${params}`,
      mergeHeader({
        ...options,
      })
    )
    .json<R>();
}

export async function post<R>(url: Input, data?: any, options?: Options) {
  return await ky
    .post(
      url,
      mergeHeader({
        ...options,
        json: data,
      })
    )
    .json<R>();
}

export async function download(
  url: Input,
  options?: Options,
  onDownloadProgress?: Options['onDownloadProgress']
) {
  return await ky(url, {
    onDownloadProgress: onDownloadProgress,
    ...mergeHeader({ ...options }),
  });
}

export function mergeHeader(options?: Options): Options {
  const token = getCSRFToken();
  if (!token) {
    return {
      ...options,
    };
  }
  return {
    ...options,
    headers: {
      ...options?.headers,
      ['X-CSRF-TOKEN']: getCSRFToken(),
      ['X-Requested-With']: 'XMLHttpRequest',
    },
  };
}

export async function upload<T = any>(
  url: string,
  data: any,
  onDownloadProgress?: Options['onDownloadProgress']
) {
  return await ky
    .post(url, { body: data, onDownloadProgress: onDownloadProgress })
    .json<T>();
}
