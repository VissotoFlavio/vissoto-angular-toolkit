import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { ImageRequest } from '../../../../interfaces/components/ui/interfaces/select-request.interface';
import { ImageServices } from './image.services';
import { Language } from '../../../../components/code-viewer/interfaces/languages.enum';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe('ImageServices', () => {
  let service: ImageServices;
  let http: HttpRequestClientServices;

  const mockImage = {
    data: {
      image: {
        code: 'code image',
        language: Language.TypeScript,
      },
    },
  } as RequestDefault<ImageRequest>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestClientServices],
      imports: [HttpClientModule],
    }).compileComponents();

    service = TestBed.inject(ImageServices);
    http = TestBed.inject(HttpRequestClientServices);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });

  test('should return MenuSecondary', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockImage));
    service.getImageCodes().subscribe({
      next: (x: RequestDefault<ImageRequest>) => {
        expect(x.data).toBe(mockImage.data);
      },
    });
  });
});
